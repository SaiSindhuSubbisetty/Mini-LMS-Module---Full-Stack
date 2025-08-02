package com.codemantra.lms.repository;

import com.codemantra.lms.entity.LessonProgress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LessonProgressRepository extends JpaRepository<LessonProgress, Long> {

    long countByLesson_Module_IdAndUserIdAndCompletedTrue(Long moduleId, Long userId);
    long countByLesson_Module_Id(Long moduleId);

    long countByLesson_Module_Course_IdAndUserIdAndCompletedTrue(Long courseId, Long userId);
    long countByLesson_Module_Course_Id(Long courseId);

    Optional<LessonProgress> findByLessonIdAndUserId(Long lessonId, Long userId);
}
