package mano.kelionesx;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import mano.kelionesx.Autobusai;

/**
 * Duomenu bazes lenteles <i>imones</i> 1-o iraso klase
 * 
 * @author Toma
 *
 */
@Entity
public class Imones {
	/**
	 * Iraso id
	 */
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
	/**
	 * Imones pavadinimas
	 */
    private String pav;
	/**
	 * Imones kontaktai
	 */
    private String kontaktai;
    @OneToMany(mappedBy="imones",cascade=CascadeType.ALL)
    @JsonIgnoreProperties("imones")
	/**
	 * Imones autobusai
	 */
    private List<Autobusai> autobusai;
	/**
	 * Autobusu saraso (lentele <i>autobusai</i>)getter'is
	 * 
	 * @return autobusai (lentele <i>autobusai</i>)
	 */
	public List<Autobusai> getAutobusai() {
		return autobusai;
	}
	/**
	 * Autobusu saraso (lentele <i>autobusai</i>) setter'is
	 * 
	 * @param autobusai (lentele <i>autobusai</i>)
	 */
	public void setAutobusai(List<Autobusai> autobusai) {
		this.autobusai = autobusai;
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
	 * Imones pavadinimo (laukelis <i>pav</i>) getter'is
	 * 
	 * @return pav (laukelis <i>pav</i>)
	 */
	public String getPav() {
		return pav;
	}
	/**
	 * Imones pavadinimo (laukelis <i>pav</i>) setter'is
	 * 
	 * @param pav (laukelis <i>pav</i>)
	 */
	public void setPav(String pav) {
		this.pav = pav;
	}
	/**
	 * Imones kontaktu (laukelis <i>kontaktai</i>) getter'is
	 * 
	 * @return kontaktai (laukelis <i>kontaktai</i>)
	 */
	public String getKontaktai() {
		return kontaktai;
	}
	/**
	 * Imones kontaktu (laukelis <i>kontaktai</i>) setter'is
	 * 
	 * @param kontaktai (laukelis <i>kontaktai</i>)
	 */
	public void setKontaktai(String kontaktai) {
		this.kontaktai = kontaktai;
	}
    
}
