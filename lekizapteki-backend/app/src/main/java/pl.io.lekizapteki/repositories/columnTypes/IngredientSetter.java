package pl.io.lekizapteki.repositories.columnTypes;

import lombok.AllArgsConstructor;
import pl.io.lekizapteki.repositories.excelDatatypes.Medicine;

@AllArgsConstructor
public class IngredientSetter implements MedicinePropertySetter {

  private final Medicine medicine;

  public void setMedicineProperty(String value) {
    medicine.setIngredient(value);
  }
}