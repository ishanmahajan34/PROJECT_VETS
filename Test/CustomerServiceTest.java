import com.cdk.vets.dao.CustomerDAO;
import com.cdk.vets.model.Car;
import com.cdk.vets.model.Customer;
import com.cdk.vets.service.CustomerService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.runners.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class CustomerServiceTest {
	@Mock
	private CustomerDAO customerDao;
	
	@InjectMocks
	private CustomerService customerServiceToTest;
	
	@Test
	public void shouldAddCustomerAfterCallingDao() {
		Car car =new Car();
		List<Car> carList = new ArrayList<>();
		carList.add(car);
		Customer customer=new Customer("Ishaan","Ishaan@gmail.com" , "9999999999", "Pune",carList);
		customerServiceToTest.add(customer);
		Mockito.verify(customerDao, Mockito.times(1)).save(customer);
	}
}
