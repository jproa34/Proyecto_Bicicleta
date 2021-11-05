
package reto3.reto3;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 *
 * @author juanp
 */
@Repository
public class RepositorioCategoria {
    @Autowired
    private InterfaceCategoria crud1;
    
    public List<Categoria> getAll(){
        return (List<Categoria>) crud1.findAll();
    }
    
    public Optional<Categoria> getCategoria(int id){
        return crud1.findById(id);
    }
    
    public Categoria save(Categoria categoria){
        return crud1.save(categoria);
    }
    
    public void delete(Categoria categoria){
        crud1.delete(categoria);
    }
}
