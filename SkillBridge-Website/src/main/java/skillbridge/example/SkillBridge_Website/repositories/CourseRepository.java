package skillbridge.example.SkillBridge_Website.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import skillbridge.example.SkillBridge_Website.entities.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
}
