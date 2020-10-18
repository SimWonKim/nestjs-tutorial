import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-moive.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // localhost:3000/movies
export class MoviesController {

    constructor(private readonly moivesService: MoviesService) { }

    @Get()
    getAll(): Movie[] {
        // express기반이기 때문에 req, res 사용 가능하다.
        // 하지만 express에서 fastify로 전환하면 req, res 사용이 문제가 생긴다.
        // nestjs가 제공하는 방법으로 사용하는것이 좋을것.
        return this.moivesService.getAll();
    }

    @Get("/search")
    search(@Query('title') searchTitle: string) {
        return searchTitle
    }

    @Get("/:id")
    getOne(@Param("id") moiveId: number) {
        return this.moivesService.getOne(moiveId);
    }

    @Post()
    create(@Body() moiveData: CreateMovieDto) {
        return this.moivesService.create(moiveData);
    }

    @Delete("/:id")
    remove(@Param('id') moiveId: number) {
        return this.moivesService.deleteOne(moiveId)
    }

    @Patch("/:id")
    patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
        return this.moivesService.update(movieId, updateData)
    }
}
