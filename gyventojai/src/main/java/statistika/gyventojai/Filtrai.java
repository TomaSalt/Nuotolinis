package statistika.gyventojai;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
import org.hibernate.Session;
public class Filtrai {
		
	protected Session em;	
	private List<String> stulp_pavadinimai;

	public Filtrai (  Session em  ) {
		
		this.em = em;
	}	
  
	public List<GyventojuDuomenys> gyventojuDuomenys ( Integer salis_id, Integer pagal_lyti, Integer pagal_gyv_mieste, Integer pagal_salis, Integer amz_ribos ) {
		stulp_pavadinimai = new ArrayList<>();
		stulp_pavadinimai.add("Salis");
		String group_by = " GROUP BY ";
		String kablelis = "";
		Integer amzius = 0;
		String select_gyventoju_duomenys = 
			"SELECT "
			+ "`salys`.`pav` AS `Salis`";
		
		if(pagal_salis == 1) {
			group_by += kablelis + "`salys`.`id`";
			kablelis = ",";
			
		}
		select_gyventoju_duomenys += ",`pavadinimas` AS `Miestas`";
		group_by += kablelis + "`miestai`.`id`";
		kablelis = ",";
		stulp_pavadinimai.add("Miestas");
		if(pagal_lyti == 1 ) {
			select_gyventoju_duomenys += ",`gyventojai`.`lytis` AS `Lytis`";
			group_by += kablelis + "`gyventojai`.`lytis`";
			kablelis = ",";
			stulp_pavadinimai.add("Lytis");
		}
		if(pagal_gyv_mieste == 1) {
			select_gyventoju_duomenys += ",`gyventojai`.`flag_gyv_mieste` AS `Gyv. mieste`";
			group_by += kablelis + "`gyventojai`.`flag_gyv_mieste`";
			kablelis = ",";
			stulp_pavadinimai.add("Gyvena mieste");
		}
		if(amz_ribos != 0) {
			select_gyventoju_duomenys += ",`gyventojai`.`amz_grupes` AS `Amziu grupes`";
			group_by += kablelis + "`gyventojai`.`amz_grupes`";
			stulp_pavadinimai.add("Amziu grupe");
		}
		select_gyventoju_duomenys += ",SUM(`gyventojai`.`kiekis`) AS `Kiekis`"
			+ " FROM `miestai`"
			+ " LEFT JOIN `gyventojai` ON(`miestai`.`id` = `gyventojai`.`id_miesto`)"
			+ " LEFT JOIN `salys` ON(`miestai`.`id_salies` = `salys`.`id`)";
		stulp_pavadinimai.add("Kiekis");
		if(salis_id != 0) {
			select_gyventoju_duomenys += " WHERE `salys`.`id`=" + salis_id;
		}
		select_gyventoju_duomenys += group_by;
		while(amzius <= 85) {
		 	stulp_pavadinimai.add(amzius + "-" + (amzius + amz_ribos));
			amzius += amz_ribos;
		}
		System.out.println ( select_gyventoju_duomenys );
	    Query query = em.createNativeQuery ( select_gyventoju_duomenys );
/*
		,IF((`gyventojai`.`amz_grupes` <= 5), `gyventojai`.`kiekis`, "0") AS `0-5`
		,IF(( 5 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <=10), `gyventojai`.`kiekis`, "0")  AS `6-10`
		,IF(( 10 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 15), `gyventojai`.`kiekis`, "0") AS `11-15`
		,IF(( 15 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 20), `gyventojai`.`kiekis`, "0") AS `16-20`
		,IF(( 20 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 25), `gyventojai`.`kiekis`, "0") AS `21-25`
		,IF(( 25 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 30), `gyventojai`.`kiekis`, "0") AS `26-30`
		,IF(( 30 <`gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 35), `gyventojai`.`kiekis`, "0") AS `31-35`
		,IF(( 35 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 40), `gyventojai`.`kiekis`, "0") AS `36-40`
		,IF(( 40 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 45), `gyventojai`.`kiekis`, "0") AS `41-45`
		,IF(( 45 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 50), `gyventojai`.`kiekis`, "0") AS `46-50`
		,IF(( 50 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 55), `gyventojai`.`kiekis`, "0") AS `51-55`
		,IF(( 55 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 60), `gyventojai`.`kiekis`, "0") AS `56-60`
		,IF(( 60 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 65), `gyventojai`.`kiekis`, "0") AS `61-65`
		,IF(( 65 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 70), `gyventojai`.`kiekis`, "0") AS `66-70`
		,IF(( 70 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 75), `gyventojai`.`kiekis`, "0") AS `71-75`
		,IF(( 75 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 80), `gyventojai`.`kiekis`, "0") AS `76-80`
		,IF(( 80 < `gyventojai`.`amz_grupes` AND `gyventojai`.`amz_grupes` <= 85), `gyventojai`.`kiekis`, "0") AS `81-85`
		,IF(( `gyventojai`.`amz_grupes` > 85), `gyventojai`.`kiekis`, "0") AS `>85`*/
	    return (List<GyventojuDuomenys>) query.getResultList(); 
	}

	public List<String> getStulp_pavadinimai() {
		return stulp_pavadinimai;
	}

	public void setStulp_pavadinimai(List<String> stulp_pavadinimai) {
		this.stulp_pavadinimai = stulp_pavadinimai;
	}
	
}
