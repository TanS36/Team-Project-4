package skillbridge.example.SkillBridge_Website.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import skillbridge.example.SkillBridge_Website.entities.Course;
import skillbridge.example.SkillBridge_Website.exceptions.CourseNotFoundException;
import skillbridge.example.SkillBridge_Website.repositories.CourseRepository;

import java.util.List;

@Service
public class CourseService {
    private final CourseRepository courseRepository;

    @Autowired
    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Course createCourse(Course course) {
        return courseRepository.save(course);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    public Course getCourseById(Long id) {
        return courseRepository.findById(id)
                .orElseThrow(() -> new CourseNotFoundException("Course not found!"));
    }

    public Course updateCourse(Long id, Course course) {
        if (!courseRepository.existsById(id)) {
            throw new CourseNotFoundException("Course not found!");
        }
        course.setId(id);
        return courseRepository.save(course);
    }

    public void deleteCourse(Long id) {
        if (!courseRepository.existsById(id)) {
            throw new CourseNotFoundException("Course not found!");
        }
        courseRepository.deleteById(id);
    }
}
