import com.cdk.vets.controller.CustomerController;
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
public class CustomerControllerTest {

	@Mock
    private CustomerService customerService;
	
	@InjectMocks
	private CustomerController customerControllerToTest;
	
	@Test
	public void shouldAddCustomer() {
		Car car =new Car();
		List<Car> carList = new ArrayList<>();
		carList.add(car);
		Customer customer=new Customer("Ishaan","Ishaan@gmail.com" , "9999999999", "Pune",carList);
		customerControllerToTest.addCustomer(customer);
		Mockito.verify(customerService, Mockito.times(1)).add(customer);
	}
}
