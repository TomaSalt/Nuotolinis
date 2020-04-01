package mano.kelionesx;

import java.util.List;


//import javax.persistence.PersistenceContext;
//import javax.persistence.EntityManager;
//import javax.persistence.Query;
import javax.persistence.*;
import org.hibernate.Session;

public class Pasiulymai {
	
	  protected Session em;	
	
	  public Pasiulymai(  Session em  ) {
		  
		    this.em = em;
	  }	
	  
	  public List<Keliones> pasiulymai( Integer id ) {
		  
		  	String qw_pasiulymai =
		  				
		  		"SELECT SQL_CALC_FOUND_ROWS " 
					+ 	"`keliones`.*"
					+ "FROM "
					+ 		"`keliones` "  
					+ "LEFT JOIN "
					+ "		`klientai_keliones` ON ( "
					
					+ 				"`keliones`.`id`=`klientai_keliones`.`keliones_id` "
					+			" AND "
					+				"`klientai_keliones`.`klientai_id`=" + id
					+ 		") "
					+ "LEFT JOIN "
					+ "		`klientai` ON ( "
					
					+ 			"`klientai`.`id`=" + id
					+ 		") "					
					+ "WHERE "
						+ 		"`klientai_keliones`.`id` IS NULL"
						+ " AND "
						+  		"`klientai`.`flag_poilsines`=`keliones`.`flag_poilsines`" 
						+ " AND "	
						+		"`klientai`.`flag_pazintines`=`keliones`.`flag_pazintines`"
						+ " AND "
						+  		"`klientai`.`flag_viskas_isk`=`keliones`.`flag_viskas_isk`" 
						+ " AND "	
						+		"`klientai`.`flag_laisv_pasir`=`keliones`.`flag_laisv_pasir`"	
				+ " GROUP BY" 
				+	   " `keliones`.`id` "
					;
		  	System.out.println ( qw_pasiulymai );
		    Query query = em.createNativeQuery ( qw_pasiulymai );
		    return (List<Keliones>) query.getResultList();
	  }	  	

}
