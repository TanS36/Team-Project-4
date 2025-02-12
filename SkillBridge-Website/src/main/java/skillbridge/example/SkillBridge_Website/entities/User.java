package skillbridge.example.SkillBridge_Website.entities;

import jakarta.persistence.*;
import lombok.*;
import skillbridge.example.SkillBridge_Website.entities.enums.Role;

@Entity
@Table(name = "users") // PostgreSQL treats "user" as a reserved keyword, so use "users"
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;
}

