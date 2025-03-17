package skillbridge.example.SkillBridge_Website.services;

import org.springframework.stereotype.Service;
import skillbridge.example.SkillBridge_Website.entities.Lesson;
import skillbridge.example.SkillBridge_Website.exceptions.CourseNotFoundException;
import skillbridge.example.SkillBridge_Website.exceptions.LessonNotFoundException;
import skillbridge.example.SkillBridge_Website.repositories.LessonRepository;
import skillbridge.example.SkillBridge_Website.repositories.CourseRepository;

import java.util.List;

@Service
public class LessonService {

    private final LessonRepository lessonRepository;
    private final CourseRepository courseRepository;

    public LessonService(LessonRepository lessonRepository, CourseRepository courseRepository) {
        this.lessonRepository = lessonRepository;
        this.courseRepository = courseRepository;
    }

    // Create a lesson for a specific course
    public Lesson createLesson(Long courseId, Lesson lesson) {
        return courseRepository.findById(courseId).map(course -> {
            lesson.setCourse(course);
            return lessonRepository.save(lesson);
        }).orElseThrow(() -> new CourseNotFoundException("Course with ID " + courseId + " not found!"));
    }

    // Get all lessons for a specific course
    public List<Lesson> getAllLessonsByCourse(Long courseId) {
        if (!courseRepository.existsById(courseId)) {
            throw new CourseNotFoundException("Course with ID " + courseId + " not found!");
        }
        return lessonRepository.findByCourse_Id(courseId);
    }

    // Get all lessons from all courses
    public List<Lesson> getAllLessons() {
        return lessonRepository.findAll();
    }

    // Get lesson by ID
    public Lesson getLessonById(Long id) {
        return lessonRepository.findById(id)
                .orElseThrow(() -> new LessonNotFoundException("Lesson with ID " + id + " not found!"));
    }

    // Delete lesson by ID
    public void deleteLesson(Long id) {
        if (!lessonRepository.existsById(id)) {
            throw new LessonNotFoundException("Lesson with ID " + id + " not found!");
        }
        lessonRepository.deleteById(id);
    }
}
