package com.codemantra.lms.controller;

import com.codemantra.lms.entity.Module;
import com.codemantra.lms.service.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/modules")
public class ModuleController {

    @Autowired
    private ModuleService moduleService;

    @PostMapping
    public ResponseEntity<Module> createModule(@RequestBody Module module) {
        Module savedModule = moduleService.createModule(module); // Use service instead of repository
        return new ResponseEntity<>(savedModule, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Module>> getAllModules() {
        List<Module> modules = moduleService.getAllModules();
        return new ResponseEntity<>(modules, HttpStatus.OK);
    }

    @GetMapping("/{id}/progress")
    public double getProgress(@PathVariable Long id, @RequestParam Long userId) {
        return moduleService.getModuleProgress(id, userId);
    }

    @GetMapping("/{id}")
    public Module getModuleWithLessons(@PathVariable Long id) {
        return moduleService.getModuleWithLessons(id);
    }

}
