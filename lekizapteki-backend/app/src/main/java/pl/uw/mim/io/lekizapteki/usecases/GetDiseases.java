package pl.uw.mim.io.lekizapteki.usecases;

import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import pl.uw.mim.io.lekizapteki.mappers.dto.DiseasesDtoMapper;
import pl.uw.mim.io.lekizapteki.models.disease.DiseaseDto;
import pl.uw.mim.io.lekizapteki.services.DiseaseService;

@Component
@AllArgsConstructor
public class GetDiseases {
  private DiseaseService diseaseService;

  public List<DiseaseDto> execute() {
    return DiseasesDtoMapper.map(diseaseService.getAllDiseases());
  }
}
