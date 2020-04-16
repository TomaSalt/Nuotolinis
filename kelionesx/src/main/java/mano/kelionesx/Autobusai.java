package mano.kelionesx;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import mano.kelionesx.Imones;
/**
 * Duomenu bazes lenteles <i>autobusai</i> 1-o iraso klase
 * 
 * @author Toma
 *
 */
@Entity
public class Autobusai {

	/**
	 * Iraso id
	 */
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
	/**
	 * Autobuso modelis
	 */
    private String modelis;
	/**
	 * Autobuso metai
	 */  
    private Integer metai;
	/**
	 * Autobuso klase
	 */ 
    private String klase;	
	/**
	 * Autobuso kaina uz kilometra
	 */
    private Double kaina_km;	
	/**
	 * Autobuso kaina uz valanda
	 */
    private Double kaina_val;	
	/**
	 * Autobuso vietu skaicius
	 */  
    private Integer vietu_sk;
	/**
	 * Imones, nuomojancios autobusa, id
	 */
    private Integer imones_id;
    @JsonIgnoreProperties("autobusai")
    @ManyToOne
    @JoinColumn(insertable=false, updatable=false)
	/**
	 * Autobusa turincios imones (lentele <i>imones</i>) getter'is
	 * 
	 * @return imones (lentele <i>imones</i>)
	 */
    private Imones imones;
	/**
	 * Autobusa turincios imones (lentele <i>imones</i>) setter'is
	 * 
	 * @param imones (lentele <i>imones</i>)
	 */
    
	public Imones getImones() {
		return imones;
	}
	public void setImones(Imones imones) {
		this.imones = imones;
	}
	/**
	 * Id getter'is
	 * 
	 * @return id iraso Id
	 */ 
	public Integer getId() {
		return id;
	}
	/**
	 * Id setter'is
	 * 
	 * @param id iraso Id
	 */
	public void setId(Integer id) {
		this.id = id;
	}
	/**
	 * Autobuso modelio (laukelis <i>modelis</i>) getter'is
	 * 
	 * @return modelis (laukelis <i>modelis</i>)
	 */
	public String getModelis() {
		return modelis;
	}
	/**
	 * Autobuso modelio (laukelis <i>modelis</i>) setter'is
	 * 
	 * @param modelis (laukelis <i>modelis</i>)
	 */
	public void setModelis(String modelis) {
		this.modelis = modelis;
	}
	/**
	 * Autobuso gamybos metu (laukelis <i>apras</i>) getter'is
	 * 
	 * @return apras (laukelis <i>apras</i>)
	 */
	public Integer getMetai() {
		return metai;
	}
	/**
	 * Autobuso gamybos metu (laukelis <i>metai</i>) setter'is
	 * 
	 * @param metai (laukelis <i>metai</i>)
	 */
	public void setMetai(Integer metai) {
		this.metai = metai;
	}
	
	 /* Autobuso klases (laukelis <i>klase</i>) getter'is
	 * 
	 * @return klase (laukelis <i>klase</i>)
	 */	
	public String getKlase() {
		return klase;
	}
	/**
	 * Autobuso klases (laukelis <i>klase</i>) setter'is
	 * 
	 * @param klase (laukelis <i>klase</i>)
	 */	
	public void setKlase(String klase) {
		this.klase = klase;
	}
	/**
	 * Autobuso 1km kainos (laukelis <i>kaina_km</i>) getter'is
	 * 
	 * @return kaina_km (laukelis <i>kaina_km</i>)
	 */	
	public Double getKaina_km() {
		return kaina_km;
	}
	/**
	 * Autobuso 1km kainos (laukelis <i>kaina_km</i>) setter'is
	 * 
	 * @param kaina_km (laukelis <i>kaina_km</i>)
	 */
	public void setKaina_km(Double kaina_km) {
		this.kaina_km = kaina_km;
	}
	/**
	 * Autobuso 1 val. kainos (laukelis <i>kaina_val</i>) getter'is
	 * 
	 * @return kaina_val (laukelis <i>kaina_val</i>)
	 */	
	public Double getKaina_val() {
		return kaina_val;
	}
	/**
	 * Autobuso 1 val. kainos (laukelis <i>kaina_val</i>) setter'is
	 * 
	 * @param kaina_val (laukelis <i>kaina_val</i>)
	 */	
	public void setKaina_val(Double kaina_val) {
		this.kaina_val = kaina_val;
	}
	/**
	 * Autobuso vietu skaiciaus (laukelis <i>vietu_sk</i>) getter'is
	 * 
	 * @return vietu_sk (laukelis <i>vietu_sk</i>)
	 */
	public Integer getVietu_sk() {
		return vietu_sk;
	}
	/**
	 * Autobuso vietu skaiciaus (laukelis <i>vietu_sk</i>) setter'is
	 * 
	 * @param vietu_sk (laukelis <i>vietu_sk</i>)
	 */
	public void setVietu_sk(Integer vietu_sk) {
		this.vietu_sk = vietu_sk;
	}
	/**
	 * Autobusa turincios imones id (laukelis <i>imones_id</i>) getter'is
	 * 
	 * @return imones_id (laukelis <i>imones_id</i>)
	 */
	public Integer getImones_id() {
		return imones_id;
	}
	/**
	 * Autobusa turincios imones id (laukelis <i>imones_id</i>) setter'is
	 * 
	 * @param imones_id (laukelis <i>imones_id</i>)
	 */
	public void setImones_id(Integer imones_id) {
		this.imones_id = imones_id;
	}

}
