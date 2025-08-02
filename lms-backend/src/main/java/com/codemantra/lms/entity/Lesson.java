package com.codemantra.lms.entity;

import com.codemantra.lms.enums.LessonType;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Lesson {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Enumerated(EnumType.STRING)
    private LessonType type;

    @Lob
    private String content;

    @ManyToOne
    @JoinColumn(name = "module_id")
    private Module module;
}
