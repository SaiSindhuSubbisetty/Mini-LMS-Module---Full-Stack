package com.codemantra.lms.service;

import com.codemantra.lms.entity.Module;
import com.codemantra.lms.repository.ModuleRepository;
import com.codemantra.lms.repository.LessonProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ModuleService {

    @Autowired
    private ModuleRepository moduleRepo;

    @Autowired
    private LessonProgressRepository progressRepo;

    public Module createModule(Module module) {
        return moduleRepo.save(module);
    }

    public List<Module> getAllModules() {
        return moduleRepo.findAll();
    }

    public Module getModuleWithLessons(Long moduleId) {
        return moduleRepo.findById(moduleId)
                .orElseThrow(() -> new RuntimeException("Module not found"));
    }

    public double getModuleProgress(Long moduleId, Long userId) {
        long totalLessons = progressRepo.countByLesson_Module_Id(moduleId);
        long completedLessons = progressRepo.countByLesson_Module_IdAndUserIdAndCompletedTrue(moduleId, userId);

        if (totalLessons == 0) return 0.0;

        return (completedLessons * 100.0) / totalLessons;
    }
}
