package com.codemantra.lms.controller;

import com.codemantra.lms.entity.Lesson;
import com.codemantra.lms.service.LessonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import java.util.List;

@RestController
@RequestMapping("/lessons")
public class LessonController {

    @Autowired
    private LessonService lessonService;

    @PostMapping
    public ResponseEntity<Lesson> createLesson(@RequestBody Lesson lesson) {
        Lesson createdLesson = lessonService.createLesson(lesson);
        return new ResponseEntity<>(createdLesson, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Lesson>> getAllLessons() {
        List<Lesson> lessons = lessonService.getAllLessons();
        return new ResponseEntity<>(lessons, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public Lesson getLesson(@PathVariable Long id) {
        return lessonService.getLesson(id);
    }

    @PostMapping("/{id}/progress")
    public ResponseEntity<Void> markCompleted(@PathVariable Long id, @RequestParam Long userId) {
        lessonService.markAsCompleted(id, userId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}/progress")
    public boolean getLessonProgress(@PathVariable Long id, @RequestParam Long userId) {
        return lessonService.getLessonProgress(id, userId);
    }

}
