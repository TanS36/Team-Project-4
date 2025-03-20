package skillbridge.example.SkillBridge_Website;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
public class SkillBridgeWebsiteApplication {
	public static void main(String[] args) {
		SpringApplication.run(SkillBridgeWebsiteApplication.class, args);
	}

}

