package teamyellow.carpoolappbackend;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/test")
public class TestController {
	
	@GetMapping("/hello")
	public String hello() {
		return "hello";
	}

}
