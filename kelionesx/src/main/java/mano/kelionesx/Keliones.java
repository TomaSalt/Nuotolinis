package mano.kelionesx;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Column;

@Entity
public class Keliones {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;

    private String pav;
    
    private String apras;
    
    private Double kaina;
    
    private Integer trukmeVal;
    
    private Integer flagPoilsines;	
    
    private Integer flagPazintines;	
    
    private Integer flagViskasIsk;	
    
    private Integer flagLaisvPasir;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getPav() {
		return pav;
	}

	public void setPav(String pav) {
		this.pav = pav;
	}

	public String getApras() {
		return apras;
	}

	public void setApras(String apras) {
		this.apras = apras;
	}
	

	public Double getKaina() {
		return kaina;
	}

	public void setKaina(Double kaina) {
		this.kaina = kaina;
	}

	public Integer getTrukmeVal() {
		return trukmeVal;
	}

	public void setTrukmeVal(Integer trukmeVal) {
		this.trukmeVal = trukmeVal;
	}

	public Integer getFlagPoilsines() {
		return flagPoilsines;
	}

	public void setFlagPoilsines(Integer flagPoilsines) {
		this.flagPoilsines = flagPoilsines;
	}

	public Integer getFlagPazintines() {
		return flagPazintines;
	}

	public void setFlagPazintines(Integer flagPazintines) {
		this.flagPazintines = flagPazintines;
	}

	public Integer getFlagViskasIsk() {
		return flagViskasIsk;
	}

	public void setFlagViskasIsk(Integer flagViskasIsk) {
		this.flagViskasIsk = flagViskasIsk;
	}

	public Integer getFlagLaisvPasir() {
		return flagLaisvPasir;
	}

	public void setFlagLaisvPasir(Integer flagLaisvPasir) {
		this.flagLaisvPasir = flagLaisvPasir;
	}
}
