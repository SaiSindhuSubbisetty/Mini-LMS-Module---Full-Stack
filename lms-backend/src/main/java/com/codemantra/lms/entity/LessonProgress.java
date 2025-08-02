package com.codemantra.lms.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class LessonProgress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private boolean completed;

    @ManyToOne
    @JoinColumn(name = "lesson_id")
    private Lesson lesson;
}
