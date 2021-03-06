package mano.kelionesx;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestMapping;
/**
 * 
 * Pavyzdine mokomosios web aplikacijos - kelioniu informacines sistemos AJAX uzklausu kontroleris
 * 
 * @author Toma
 *
 */
@Controller    // This means that this class is a Controller
@RequestMapping(path="/ajax") // This means URL's start with /demo (after Application path)
public class AjaxController {
	/**
	 * Duomenu bazes lenteles <i>keliones</i> JPA repositorija
	 * 
	 * @see <a href="https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/repository/JpaRepository.html">JPA repositorija</a>
	 * {@link Keliones}
	 */
	@Autowired
	KelionesRepository kelionesRepository;
	
	@Autowired
	MiestaiRepository miestaiRepository;	
	
	@Autowired
	Keliones_MiestaiRepository keliones_MiestaiRepository;	
	
	@Autowired
	AutobusaiRepository autobusaiRepository;
	
	@Autowired
	ImonesRepository imonesRepository;
	
	@GetMapping(path="/saugoti-kelione") // Map ONLY GET Requests
	public @ResponseBody String saugotiKelione (@RequestParam Integer id 
			, @RequestParam String pav
			, @RequestParam String apras
			, @RequestParam Integer flagPoilsines
			, @RequestParam Integer flagPazintines	
			, @RequestParam Integer flagViskasIsk	
			, @RequestParam Double kaina
			, @RequestParam Integer trukmeVal

			) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		
		String res = "Not done";
		Keliones n = new Keliones();
		
		if (id > 0) {
		
			Optional <Keliones> found = kelionesRepository.findById( id );
		
			// variantas trynimui
			// uzsakymaiRepository.deleteById(id);
		
			if ( found.isPresent() ) {
			
			   n = found.get();
			   n.setId(id);
			}
		}
		
	    n.setPav( pav );
	    n.setApras(apras);
	    n.setFlagPazintines(flagPazintines);
	    n.setFlagPoilsines(flagPoilsines);
		n.setFlagViskasIsk(flagViskasIsk);
	    n.setKaina(kaina);
	    n.setTrukmeVal(trukmeVal);
	    kelionesRepository.save(n);	
	    res = "Saved";
	    
		return res;
	}
	
	@GetMapping(path="/salinti-kelione") // Map ONLY GET Requests
	public @ResponseBody String salintiKelione (@RequestParam Integer id 
			) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		
		Optional <Keliones> found = kelionesRepository.findById( id );
		
		String res = "Not done";
		
		if ( found.isPresent() ) {
			
			   Keliones n = found.get();
			   kelionesRepository.deleteById(id);
			   res = "Deleted";
		}		
		return res;
	}		

	@GetMapping(path="/lst-keliones")
	public @ResponseBody Iterable<Keliones> getAllKeliones() {
		// This returns a JSON or XML with the users
		return kelionesRepository.findAll();
	}	
	/**
	 * Pateikia visu kelioniu JSON sarasa
	 * 
	 * [@link Keliones]
	 * @return Iterable<Keliones>
	 */
	@GetMapping(path="/lst-kelionesx")
	public @ResponseBody Iterable<Keliones> getAllKelionesX() {
		// This returns a JSON or XML with the users
		return kelionesRepository.findAll();
	}

	

	@GetMapping(path="/saugoti-miesta") // Map ONLY GET Requests
	public @ResponseBody String saugotiMiesta (@RequestParam Integer id 
			, @RequestParam String pav
			, @RequestParam String kodas_salies
			, @RequestParam String apras
			/*, @RequestParam Integer flagPoilsines
			, @RequestParam Integer flagPazintines	
			, @RequestParam Integer flagViskasIsk	
			*/
			) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		
		String res = "Not done";
		Miestai n = new Miestai();
		
		if (id > 0) {
		
			Optional <Miestai> found = miestaiRepository.findById( id );
		
			// variantas trynimui
			// uzsakymaiRepository.deleteById(id);
		
			if ( found.isPresent() ) {
			
			   n = found.get();
			   n.setId(id);
			}
		}
		
	    n.setPav( pav );
	    n.setKodas_salies(kodas_salies);
	    n.setApras(apras);
	    /*n.setFlagPazintines(flagPazintines);
	    n.setFlagPoilsines(flagPoilsines);
		n.setFlagViskasIsk(flagViskasIsk);
		*/
	    miestaiRepository.save(n);	
	    res = "Saved";
	    
		return res;
	}
	
	@GetMapping(path="/salinti-miesta") // Map ONLY GET Requests
	public @ResponseBody String salintiMiesta (@RequestParam Integer id 
			) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		
		Optional <Miestai> found = miestaiRepository.findById( id );
		
		String res = "Not done";
		
		if ( found.isPresent() ) {
			
			   Miestai n = found.get();
			   miestaiRepository.deleteById(id);
			   res = "Deleted";
		}		
		return res;
	}		

	@GetMapping(path="/lst-miestai")
	public @ResponseBody Iterable<Miestai> getAllMiestai() {
		// This returns a JSON or XML with the users
		return miestaiRepository.findAll();
	}	
	
	@GetMapping(path="/miestas")
	public @ResponseBody Optional<Miestai> getMiestas(@RequestParam Integer id) {
		// This returns a JSON or XML with the users
		Optional <Miestai> found = miestaiRepository.findById( id );		
		/*
		if ( found.isPresent() ) {
			
			   Uzsakymai n = found.get();
		}		
		*/	
		return found;
	}	
	
	@GetMapping(path="/keliones-miestai") // Map ONLY GET Requests
	public @ResponseBody Iterable<Keliones_Miestai>getKeliones_Miestai (/*@RequestParam Integer id 
			, @RequestParam(defaultValue="0") Integer id_miest
			,*/ @RequestParam(defaultValue="0") Integer id_keliones
			) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		
		String res = "Not done";
		//Keliones_Miestai n = new Keliones_Miestai();
		List <Keliones_Miestai> miestaiPagalKelionesId = keliones_MiestaiRepository.findByKelionesId(id_keliones);
		//miestaiPagalKelionesId
		//System.out.println ( "id: " + id + " miesto. id: " + id_miest + " keliones. id " + id_keliones );
		
		/*if (id > 0) {
		
			Optional <Keliones_Miestai> found = keliones_MiestaiRepository.findById( id );
		
			// variantas trynimuiui
			// uzsakymaiRepository.deleteById(id);
		
			if ( found.isPresent() ) {
			
			   n = found.get();
			  //  n.setId(id);
			}
			
		} else {
		
			if ( ( id_miest > 0 ) && ( id_keliones > 0 ) ) {
				
				n.setMiestai_id ( id_miest );
				n.setKeliones_id( id_keliones );
			}
		}
		
		System.out.println ( n.toString() );			   			   
		keliones_MiestaiRepository.save(n);	*/
		res = "Saved";
	    
		return miestaiPagalKelionesId;
	}
	
	@GetMapping(path="/salinti-keliones-miestai") // Map ONLY GET Requests
	public @ResponseBody String salintiKelionesMiestai (@RequestParam Integer id_miest
			, @RequestParam Integer id 
			) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		
		Optional <Keliones_Miestai> found = keliones_MiestaiRepository.findById( id );
		
		String res = "Not done";
		
		if ( found.isPresent() ) {
			
			   Keliones_Miestai n = found.get();
			   keliones_MiestaiRepository.deleteById(id);
			   res = "Deleted";
		}		
		return res;
	}
	@GetMapping(path="/saugoti-autobusa") // Map ONLY GET Requests
	public @ResponseBody String saugotiAutobusa (@RequestParam Integer id 
			, @RequestParam String modelis
			, @RequestParam Integer metai
			, @RequestParam String klase
			, @RequestParam Double kaina_km	
			, @RequestParam Double kaina_val	
			, @RequestParam Integer vietu_sk
			, @RequestParam Integer imones_id

			) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		
		String res = "Not done";
		Autobusai n = new Autobusai();
		
		if (id > 0) {
		
			Optional <Autobusai> found = autobusaiRepository.findById( id );
		
			// variantas trynimui
			// uzsakymaiRepository.deleteById(id);
		
			if ( found.isPresent() ) {
			
			   n = found.get();
			   n.setId(id);
			}
		}
		
	    n.setModelis( modelis );
	    n.setMetai(metai);
	    n.setKlase(klase);
	    n.setKaina_km(kaina_km);
		n.setKaina_val(kaina_val);
		n.setVietu_sk(vietu_sk);
	    n.setImones_id(imones_id);
	    
	    autobusaiRepository.save(n);	
	    res = "Saved";
	    
		return res;
	}
	
	@GetMapping(path="/salinti-autobusa") // Map ONLY GET Requests
	public @ResponseBody String salintiAutobusa (@RequestParam Integer id 
			) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		
		Optional <Autobusai> found = autobusaiRepository.findById( id );
		
		String res = "Not done";
		
		if ( found.isPresent() ) {
			
			   Autobusai n = found.get();
			   autobusaiRepository.deleteById(id);
			   res = "Deleted";
		}		
		return res;
	}	
	/**
	 * Pateikia visu autobusu JSON sarasa
	 * 
	 * [@link Autobusai]
	 * @return Iterable<Autobusai>
	 */
	@GetMapping(path="/lst-autobusai")
	public @ResponseBody Iterable<Autobusai> getAllAutobusai() {
		// This returns a JSON or XML with the users
		return autobusaiRepository.findAll();
	}
	@GetMapping(path="/saugoti-imone") // Map ONLY GET Requests
	public @ResponseBody String saugotiImone (@RequestParam Integer id 
			, @RequestParam String pav
			, @RequestParam String kontaktai
			
			) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		
		String res = "Not done";
		Imones n = new Imones();
		
		if (id > 0) {
		
			Optional <Imones> found = imonesRepository.findById( id );
			
			if ( found.isPresent() ) {
			
			   n = found.get();
			   n.setId(id);
			}
		}
		
	    n.setPav( pav );
	    n.setKontaktai(kontaktai);
	    
	    imonesRepository.save(n);	
	    res = "Saved";
	    
		return res;
	}
	
	@GetMapping(path="/salinti-imone") // Map ONLY GET Requests
	public @ResponseBody String salintiImone (@RequestParam Integer id 
			) {
		// @ResponseBody means the returned String is the response, not a view name
		// @RequestParam means it is a parameter from the GET or POST request
		
		Optional <Imones> found = imonesRepository.findById( id );
		
		String res = "Not done";
		
		if ( found.isPresent() ) {
			
			   Imones n = found.get();
			   imonesRepository.deleteById(id);
			   res = "Deleted";
		}		
		return res;
	}	
	/**
	 * Pateikia visu imoniu JSON sarasa
	 * 
	 * [@link Imones]
	 * @return Iterable<Imones>
	 */
	@GetMapping(path="/lst-imones")
	public @ResponseBody Iterable<Imones> getAllImones() {
		// This returns a JSON or XML with the users
		return imonesRepository.findAll();
	}
}
