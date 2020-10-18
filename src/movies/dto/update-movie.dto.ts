
import { PartialType } from '@nestjs/mapped-types'
import { CreateMovieDto } from './create-moive.dto'


// 필드들은 createdto와 같으나 모든 값들이 다 있을필요는 없다.
// ParticaiType을 이용하면 같은 필드를 사용하되 선택적으로 사용이 가능하다.
// 결론 : 필드 그대로 복제 + 선택가능. => 그냥 모듈을 불러와서 사용해서 간단하게 처리함.
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}