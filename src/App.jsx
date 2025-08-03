import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Courses from '../pages/Courses'
import Login from '../pages/Login'
import Register from '../pages/Register'
import './App.css'
import Test from '../pages/test'
import ProtectedRoute from '../components/ProtectedRoute'
import TeacherDashboard from '../pages/teacher/dashboard';
import TeacherCourses from '../pages/teacher/courses';
import AddCoursePage from '../pages/teacher/AddCourse';
import TeacherProfilePage from '../pages/teacher/TeacherProfile'
import TeacherCourse from '../pages/teacher/course'
import CourseDetail from '../pages/CourseDetail'
import Lesson from '../pages/Lesson'
import Quiz from '../pages/Quiz'
import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users'
import CoursesCrud from '../pages/CoursesCrud'
import LessonsCrud from '../pages/LessonsCrud'
import EditCoursePage from '../pages/teacher/course'
import AdminLogin from '../pages/admin-login'
import Unauthorized from '../pages/Unauthorized'
import EnrolledCourses from '../pages/EnrolledCourses'
import StudentProfile from '../pages/StudentProfile'
import TeacherProfile from '../pages/TeacherProfile'
import Course from '../pages/Course'
import CourseEnroll from '../pages/CourseEnroll'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path="/admin/courses-crud" element={<ProtectedRoute><CoursesCrud /></ProtectedRoute>} />
        <Route path="/admin/lessons-crud" element={<ProtectedRoute><LessonsCrud /></ProtectedRoute>} />
        <Route path='/admin/login' element={<AdminLogin />} />


        <Route path='/teacher/dashboard' element={
          <ProtectedRoute>
            <TeacherDashboard/>
          </ProtectedRoute>
        }/>
        {/* <Route path='/teacher/profile' element={
          <ProtectedRoute><TeacherProfilePage/></ProtectedRoute>
        }/> */}
        <Route path='/teacher/addCourse' element={
          <ProtectedRoute>
            <AddCoursePage/>
          </ProtectedRoute>
        }/>
          <Route path="/teacher/course/:courseId" element={<ProtectedRoute>
            <EditCoursePage/>
          </ProtectedRoute>} />
          <Route path='/teacher/courses' element={<ProtectedRoute>
            <TeacherCourses/>
          </ProtectedRoute>}/>


        <Route path="/course" element={<Courses />} />
        <Route path="/courseOne/:tutorialId" element={<Course />} />
        <Route path="/course-enroll" element={<CourseEnroll />} />
        <Route path="/student" element={<StudentProfile />} />
        <Route path="/teacher" element={<TeacherProfile />} />
        <Route
          path='/test'
          element={
            <ProtectedRoute>
              <Test />
            </ProtectedRoute>
          }
        />
        <Route path='/enrolled' element={<EnrolledCourses />} />
        <Route path='/unauthorized' element={<Unauthorized />} />
        <Route path="/course/:tutorialId" element={<CourseDetail />} />
        <Route path='/quiz/:tutorialId' element={<Quiz />} />
        <Route path="/lesson/:lessonId" element={<Lesson />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/teacher/course' element={<TeacherCourse/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
