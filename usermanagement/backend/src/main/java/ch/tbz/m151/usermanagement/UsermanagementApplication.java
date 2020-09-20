package ch.tbz.m151.usermanagement;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.UserDetailsServiceAutoConfiguration;
import org.springframework.context.annotation.Bean;

import java.awt.*;
import java.net.URL;

@SpringBootApplication(exclude = {UserDetailsServiceAutoConfiguration.class})
public class UsermanagementApplication {

	public static void main(String[] args) {
		SpringApplication.run(UsermanagementApplication.class, args);
	}

	@Bean
	public CommandLineRunner openBrowser() {
		return args -> {
				System.setProperty("java.awt.headless", "false");

				if(Desktop.isDesktopSupported()) {
					Desktop desktop = Desktop.getDesktop();

					if(desktop.isSupported(Desktop.Action.BROWSE)) {
						desktop.browse(new URL("http://localhost:8080").toURI());
					}
				}
		};
	}

}
