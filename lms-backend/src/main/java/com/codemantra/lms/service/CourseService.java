package com.codemantra.lms.service;

import com.codemantra.lms.entity.Course;
import com.codemantra.lms.repository.CourseRepository;
import com.codemantra.lms.repository.LessonProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseRepository courseRepo;

    @Autowired
    private LessonProgressRepository progressRepo;

    public List<Course> getAllCourses() {
        return courseRepo.findAll();
    }

    public Course getCourse(Long id) {
        return courseRepo.findById(id).orElseThrow();
    }

    public Course saveCourse(Course course) {
        return courseRepo.save(course);
    }

    public Course getCourseWithModules(Long courseId) {
        return courseRepo.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));
    }

    public double getCourseProgress(Long courseId, Long userId) {
        long total = progressRepo.countByLesson_Module_Course_Id(courseId);
        long completed = progressRepo.countByLesson_Module_Course_IdAndUserIdAndCompletedTrue(courseId, userId);
        return total == 0 ? 0 : (completed * 100.0) / total;
    }
}
