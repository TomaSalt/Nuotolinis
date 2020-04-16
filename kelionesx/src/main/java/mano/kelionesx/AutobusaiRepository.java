package mano.kelionesx;
import org.springframework.data.repository.CrudRepository;
/**
 * Duomenu bazes lenteles <i>autobusai</i> JPA repositorija
 * 
 * @see <a href="https://docs.spring.io/spring-data/jpa/docs/current/api/org/springframework/data/jpa/repository/JpaRepository.html">JPA repositorija</a>
 * {@link Autobusai}
 * @author Toma
 *
 */
public interface AutobusaiRepository extends CrudRepository<Autobusai,Integer>{

}
