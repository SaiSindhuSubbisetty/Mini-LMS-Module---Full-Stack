package com.codemantra.lms.service;

import com.codemantra.lms.entity.Lesson;
import com.codemantra.lms.entity.LessonProgress;
import com.codemantra.lms.repository.LessonRepository;
import com.codemantra.lms.repository.LessonProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;


@Service
public class LessonService {

    @Autowired
    private LessonRepository lessonRepo;

    @Autowired
    private LessonProgressRepository progressRepo;

    public Lesson createLesson(Lesson lesson) {
        return lessonRepo.save(lesson);
    }

    public Lesson getLesson(Long id) {
        return lessonRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Lesson not found with ID: " + id));
    }

    public List<Lesson> getAllLessons() {
        return lessonRepo.findAll();
    }

    public void markAsCompleted(Long lessonId, Long userId) {
        Lesson lesson = lessonRepo.findById(lessonId)
                .orElseThrow(() -> new RuntimeException("Lesson not found with ID: " + lessonId));

        LessonProgress progress = progressRepo.findByLessonIdAndUserId(lessonId, userId)
                .orElseGet(() -> {
                    LessonProgress newProgress = new LessonProgress();
                    newProgress.setLesson(lesson);
                    newProgress.setUserId(userId);
                    return newProgress;
                });

        progress.setCompleted(true);
        progressRepo.save(progress);
    }

    public boolean getLessonProgress(Long lessonId, Long userId) {
        return progressRepo.findByLessonIdAndUserId(lessonId, userId)
                .map(LessonProgress::isCompleted)
                .orElse(false);
    }

}
