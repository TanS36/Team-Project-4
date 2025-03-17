package skillbridge.example.SkillBridge_Website.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import skillbridge.example.SkillBridge_Website.entities.Lesson;
import skillbridge.example.SkillBridge_Website.services.LessonService;
import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class LessonController {

    private final LessonService lessonService;

    public LessonController(LessonService lessonService) {
        this.lessonService = lessonService;
    }

    // Create lesson for a specific course
    @PostMapping("/{courseId}/lessons")
    public ResponseEntity<Lesson> createLesson(@PathVariable Long courseId, @RequestBody Lesson lesson) {
        Lesson createdLesson = lessonService.createLesson(courseId, lesson);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdLesson);
    }

    // ✅ NEW: Get all lessons from all courses
    @GetMapping("/lessons")
    public ResponseEntity<List<Lesson>> getAllLessons() {
        return ResponseEntity.ok(lessonService.getAllLessons());
    }

    // Get all lessons for a specific course
    @GetMapping("/{courseId}/lessons")
    public ResponseEntity<List<Lesson>> getAllLessonsByCourse(@PathVariable Long courseId) {
        return ResponseEntity.ok(lessonService.getAllLessonsByCourse(courseId));
    }

    // Get a lesson by ID
    @GetMapping("/{courseId}/lessons/{id}")
    public ResponseEntity<Lesson> getLessonById(@PathVariable Long id) {
        return ResponseEntity.ok(lessonService.getLessonById(id));
    }

    // Delete a lesson by ID
    @DeleteMapping("/{courseId}/lessons/{id}")
    public ResponseEntity<Void> deleteLesson(@PathVariable Long id) {
        lessonService.deleteLesson(id);
        return ResponseEntity.noContent().build();
    }
}
