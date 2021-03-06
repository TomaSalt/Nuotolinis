package mano.kelionesx;

import javax.persistence.EntityManagerFactory;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.ui.Model;

@Controller
public class PageController {
	
	@Autowired 
	EntityManagerFactory factory;	
	
	// @Bean
	public SessionFactory sessionFactory() {

		
	        if (factory.unwrap(SessionFactory.class) == null) {
	            throw new NullPointerException("factory is not a hibernate factory");
	        }
	        return factory.unwrap(SessionFactory.class);
	}	
	
    @GetMapping("/")
    public String pradzia(Model model) {
        model.addAttribute("lst_menu", Menu.values() );    	
        return "index";
    }	
	
    @GetMapping("/keliones")
    public String keliones(Model model) {
        model.addAttribute("lst_menu", Menu.values() );    	
        return "keliones";
    }	
    
    @GetMapping("/kelionesx")
    public String kelionesx() {
        return "kelionesx";
    }   
    
    @GetMapping("/miestai")
    public String miestai(Model model) {
        model.addAttribute("lst_menu", Menu.values() );    	
        return "miestai";
    }    

    @GetMapping("/miestas")
    public String miestas(@RequestParam Integer id, Model model) {
        model.addAttribute("lst_menu", Menu.values() );
        return "miestas";
    }  
    @GetMapping("/autobusai")
    public String autobusai(Model model) {
        model.addAttribute("lst_menu", Menu.values() );
        return "autobusai";
    } 
    @GetMapping("/imones")
    public String imones(Model model) {
        model.addAttribute("lst_menu", Menu.values() );
        return "imones";
    } 
	/*@GetMapping(path="/pasiulymai")
	public  String											
		getPasiulymai(
			@RequestParam Integer id
			, Model model
	) {

		Session session = this.sessionFactory().openSession(); 
		
		Pasiulymai pasiulymai =  new Pasiulymai( session );
        model.addAttribute("lst_pasiulymai", pasiulymai.pasiulymai( id ) );
        model.addAttribute("lst_menu", Menu.values() );        
		return "pasiulymai";
	}    */
}
