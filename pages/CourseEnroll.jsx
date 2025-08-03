import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import imgUser from '/user-teacher.svg'
import imgCourse from '/icon_courses.svg'
import imgPeople from '/people.svg'
import imgReview from '/customer-reviews.svg'
import imgProfile from '/line-profile.svg'
import heroCourse from '/hero-course.svg'
import lineHeroUp from '/hero-line-up.svg'
import lineHeroDown from '/hero-line-down.svg'
import './CourseEnroll.css'
import { useEffect } from 'react';
import { useState } from 'react';

const CourseEnroll = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [enrolledTutorials, setEnrolledTutorials] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      const fetchEnrolled = async () => {
        setLoading(true);
        setError('');
        try {
          const token = localStorage.getItem('accessToken');
          const res = await fetch(`https://terrific-determination-production-cf17.up.railway.app/api/student/enrolled-tutorials`, {
            headers: { 'Authorization': `Bearer ${token}` },
            credentials: 'include'
          });
          if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message || 'Failed to fetch enrolled tutorials');
          }
          const data = await res.json();
          setReviews(data.reviews || []);
          setEnrolledTutorials(data.enrolledTutorials || []);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
      fetchEnrolled();
    }, []);

  return (
    <>
      <Header />
      <main>
        <section className="hero-course">
          <h1 className='hero-title'>{enrolledTutorials[0]?.tutorialId.title}</h1>
          <div className="hero-course-container">
            <div className="hero-course-info">
              <div className='hero-shape-course'></div>
              <div className='hero-course-cover'>
                <img className='hero-course-cover-img' src={enrolledTutorials[0]?.tutorialId.thumbnail || heroCourse} alt="" />
                <div className='hero-cover-info'>
                  <div className='hero-cover-info-teacher'>
                    <div className='hero-cat-info'>
                      <div className='students-profile-card-head'>
                        <img src={imgUser} alt="" />
                        <div>
                          <h1>{enrolledTutorials[0]?.tutorialId.teacherId?.firstName + ' ' + enrolledTutorials[0]?.tutorialId.teacherId?.lastName}</h1>
                          <p><span>{enrolledTutorials[0]?.tutorialId.teacherId?.publisher}, </span><span>{enrolledTutorials[0]?.tutorialId.category}</span></p>
                        </div>
                      </div>
                      <img src={lineHeroUp} alt="" />
                      <div className='hero-info-price'>
                        <div className='hero-cat-info-price'>${enrolledTutorials[0]?.tutorialId.price}</div>
                        <div className='hero-cat'>
                          <div className='hero-cat-info-percentage'>0%</div>
                          <div className='hero-cat-info-price-old'>300$</div>
                        </div>
                      </div>
                    </div>
                    <div className='hero-cat-info-teacher'>
                      <div className='hero-cat-info-course'>
                        <div>
                          <span className='hero-cat-info-key'>Category:</span>
                          <span className='hero-cat-info-value'>{enrolledTutorials[0]?.tutorialId.category}</span>
                        </div>
                        <div>
                          <span className='hero-cat-info-key'>Price:</span>
                          <span className='hero-cat-info-value'>${enrolledTutorials[0]?.tutorialId.price}</span>
                        </div>
                        <div>
                          <span className='hero-cat-info-key'>Lessons:</span>
                          <span className='hero-cat-info-value'>{enrolledTutorials[0]?.tutorialId.lessons?.length}</span>
                        </div>
                        <div>
                          <span className='hero-cat-info-key'>Resources:</span>
                          <span className='hero-cat-info-value'>{enrolledTutorials[0]?.tutorialId.resources?.length}</span>
                        </div>
                      </div>
                      <img src={lineHeroDown} alt="" />
                      <div className='hero-cat-info-action'>
                        <div className='hero-cat-info-add'>
                          <a href=''>Add to Card</a>
                          <svg width="40" height="38" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="39" height="37" rx="6.5" fill="#F0F8FF" />
                            <rect x="0.5" y="0.5" width="39" height="37" rx="6.5" stroke="#6A6A6A" />
                            <path d="M20 12.1699L19.4219 12.7257C19.5732 12.8827 19.7819 12.9714 20 12.9714C20.2181 12.9714 20.4268 12.8827 20.5781 12.7257L20 12.1699ZM14.6518 23.8395C14.3097 23.5583 13.804 23.6073 13.5225 23.9491C13.2409 24.2908 13.29 24.7959 13.6321 25.0772L14.6518 23.8395ZM9.66818 20.6236C9.88079 21.012 10.3683 21.1546 10.7571 20.9422C11.1459 20.7297 11.2886 20.2428 11.076 19.8544L9.66818 20.6236ZM10.1047 16.0559C10.1047 13.7575 11.4048 11.83 13.1795 11.0196C14.9037 10.2323 17.2204 10.4408 19.4219 12.7257L20.5781 11.6141C17.9658 8.90302 14.9337 8.4562 12.5124 9.56176C10.1418 10.6442 8.5 13.1577 8.5 16.0559H10.1047ZM16.2531 27.1298C16.801 27.5613 17.3893 28.0215 17.9854 28.3694C18.5814 28.7172 19.2614 29 20 29V27.3971C19.6688 27.3971 19.2791 27.2681 18.795 26.9854C18.3112 26.703 17.8092 26.3141 17.2465 25.871L16.2531 27.1298ZM23.747 27.1298C25.2731 25.9279 27.2239 24.5509 28.7542 22.8296C30.312 21.0774 31.5 18.9043 31.5 16.0559H29.8953C29.8953 18.4041 28.9334 20.214 27.5544 21.7652C26.1478 23.3473 24.3749 24.5942 22.7536 25.871L23.747 27.1298ZM31.5 16.0559C31.5 13.1577 29.8582 10.6442 27.4875 9.56176C25.0663 8.4562 22.0342 8.90302 19.4219 11.6141L20.5781 12.7257C22.7796 10.4408 25.0963 10.2323 26.8204 11.0196C28.5952 11.83 29.8953 13.7575 29.8953 16.0559H31.5ZM22.7536 25.871C22.1908 26.3141 21.6888 26.703 21.205 26.9854C20.7209 27.2681 20.3312 27.3971 20 27.3971V29C20.7386 29 21.4186 28.7172 22.0146 28.3694C22.6108 28.0215 23.1989 27.5613 23.747 27.1298L22.7536 25.871ZM17.2465 25.871C16.395 25.2005 15.5298 24.5613 14.6518 23.8395L13.6321 25.0772C14.5203 25.8074 15.4585 26.5041 16.2531 27.1298L17.2465 25.871ZM11.076 19.8544C10.4756 18.7579 10.1047 17.5159 10.1047 16.0559H8.5C8.5 17.8058 8.94925 19.3105 9.66818 20.6236L11.076 19.8544Z" fill="#6A6A6A" />
                          </svg>
                        </div>
                        <a href='' className='hero-cat-info-enroll'>
                          Register to Enroll
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-teacher-info">
              <div className="student-profile-card">
                <div className='students-profile-card-bio'>
                  <div className='students-profile-card-head'>
                    <img src={imgUser} alt="" />
                    <div>
                      <h1>Name</h1>
                      <p><span>Publisher, </span><span>Category</span></p>
                    </div>
                  </div>
                  <div className='students-profile-card-body'>{enrolledTutorials[0]?.tutorialId.description}</div>
                </div>
                <img src={imgProfile} alt="" />
                <div className='students-profile-card-performance'>
                  <div className="card-performance">
                    <img src={imgCourse} alt="" />
                    <div className='count'>3455</div>
                    <div className='title'>Courses</div>
                  </div>
                  <div className="card-performance">
                    <img src={imgPeople} alt="" />
                    <div className='count'>3455</div>
                    <div className='title'>Students</div>
                  </div>
                  <div className="card-performance">
                    <img src={imgReview} alt="" />
                    <div className='count'>3455</div>
                    <div className='title'>Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='descrpition-course'>
          <h1>Description:</h1>
          <div>{enrolledTutorials[0]?.tutorialId.description}</div>
        </section>
        <section className='benefit-course'>
          <h1>Course Benefits:</h1>
          <div className='benefit-container'>
            {enrolledTutorials[0]?.tutorialId.benefits?.map((benefit, index) => (
              <div key={index} className='benefit-cover'>
                <div className='benefit-key'></div>
                <div className='benefit-value'>{benefit}</div>
              </div>
            ))}
          </div>
        </section>
        <section className='prerequisite-course'>
          <h1>Prerequisites</h1>
          <div className='prerequisite-container'>
            {enrolledTutorials[0]?.tutorialId.prerequisites?.map((prereq, index) => (
              <div key={index} className='prerequisite-cover'>
                <div className='prerequisite-key'></div>
                <div className='prerequisite-value'>{prereq}</div>
              </div>
            ))}
          </div>
        </section>
        <section className='review-course'>
          <h1>Reviews & Ratings:</h1>
          <div className="review-profile-cards">
            {reviews?.map((review, index) => (
              <div key={index} className="review-profile-card">
              <div className="review-profile-card-head">
                <img src={imgUser} alt="" />
                <div className="info-card-head">
                  <h3>{review.title}</h3>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.64955 2.21545C5.47286 0.738486 5.88451 0 6.49999 0C7.11548 0 7.52712 0.738479 8.35041 2.21544L8.56342 2.59755C8.79741 3.01726 8.91435 3.22712 9.0968 3.36558C9.27919 3.50404 9.5063 3.55544 9.96065 3.65824L10.3743 3.75182C11.9731 4.11357 12.7725 4.29444 12.9627 4.90603C13.1529 5.5176 12.6079 6.15492 11.5179 7.42945L11.236 7.75919C10.9262 8.12137 10.7713 8.30246 10.7017 8.52652C10.632 8.75057 10.6554 8.99218 10.7022 9.47545L10.7449 9.91537C10.9097 11.6159 10.9921 12.4662 10.4942 12.8441C9.99621 13.2221 9.24774 12.8775 7.75079 12.1883L7.36352 12.0099C6.93816 11.8141 6.72548 11.7161 6.49999 11.7161C6.27451 11.7161 6.06183 11.8141 5.63647 12.0099L5.2492 12.1883C3.75224 12.8775 3.00376 13.2221 2.50585 12.8441C2.00793 12.4662 2.09032 11.6159 2.25511 9.91537L2.29774 9.47545C2.34457 8.99218 2.36798 8.75057 2.29831 8.52652C2.22864 8.30246 2.07378 8.12137 1.76405 7.75919L1.48206 7.42945C0.392113 6.15492 -0.152866 5.5176 0.0373242 4.90603C0.227514 4.29444 1.02691 4.11357 2.6257 3.75182L3.03933 3.65824C3.49365 3.55544 3.72081 3.50404 3.90321 3.36558C4.0856 3.22712 4.20259 3.01727 4.43655 2.59755L4.64955 2.21545Z" fill="url(#paint0_linear_558_649)" />
                    <defs>
                      <linearGradient id="paint0_linear_558_649" x1="6.49999" y1="4.42001" x2="2.85998" y2="13" gradientUnits="userSpaceOnUse">
                        <stop offset="0.403846" stop-color="#F4FB94" />
                        <stop offset="1" stop-color="#F2FF00" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="review-profile-card-body">
                {review.content}
              </div>
            </div>
            ))}
          </div>
        </section>
        <section className='faq-course'>
          <h1>FAQ:</h1>
          <div className='faq-container'>
            {enrolledTutorials[0]?.tutorialId.faqs?.map((faq, index) => (
              <div key={index} className='faq-left'>
                <div className='faq-left-left'>
                  <div className="question">{faq.question}</div>
                  <svg width="215" height="4" viewBox="0 0 215 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="107.5" cy="2" rx="107.5" ry="2" fill="#F0F8FF" fill-opacity="0.5" />
                  </svg>
                  <div className="answer">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default CourseEnroll