package pl.uw.mim.io.lekizapteki.mappers.dto;

import java.util.List;
import java.util.stream.Collectors;
import lombok.experimental.UtilityClass;
import pl.uw.mim.io.lekizapteki.models.disease.DiseaseDto;
import pl.uw.mim.io.lekizapteki.repositories.entities.DiseaseEntity;

@UtilityClass
public class DiseasesDtoMapper {

  public List<DiseaseDto> map(List<DiseaseEntity> diseaseEntityList) {
    return diseaseEntityList.stream()
        .map(DiseasesDtoMapper::mapDiseaseEntity)
        .collect(Collectors.toList());
  }

  private DiseaseDto mapDiseaseEntity(DiseaseEntity diseaseEntity) {
    return DiseaseDto.builder()
        .id(diseaseEntity.getId())
        .name(diseaseEntity.getName())
        .build();
  }
}