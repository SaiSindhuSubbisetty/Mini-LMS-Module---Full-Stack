package com.codemantra.lms.controller;

import com.codemantra.lms.entity.Course;
import com.codemantra.lms.service.CourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    public List<Course> getAllCourses() {
        return courseService.getAllCourses();
    }

    @PostMapping
    public ResponseEntity<Course> createCourse(@RequestBody Course course) {
        Course savedCourse = courseService.saveCourse(course);
        return new ResponseEntity<>(savedCourse, HttpStatus.CREATED);
    }

    @GetMapping("/{id}/progress")
    public double getProgress(@PathVariable Long id, @RequestParam Long userId) {
        return courseService.getCourseProgress(id, userId);
    }

    @GetMapping("/{id}")
    public Course getCourseWithModules(@PathVariable Long id) {
        return courseService.getCourseWithModules(id);
    }

}
