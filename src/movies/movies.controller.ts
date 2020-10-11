import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies') // localhost:3000/movies
export class MoviesController {

    constructor(private readonly moivesService: MoviesService){}

    @Get()
    getAll() : Movie[] {
        return this.moivesService.getAll();
    }

    @Get("/search")
    search(@Query('title') searchTitle: string) {
        return searchTitle
    }

    @Get("/:id")
    getOne(@Param("id") moiveId: string){
        return this.moivesService.getOne(moiveId);
    }

    @Post()
    create(@Body() moiveData){
        return this.moivesService.create(moiveData);
    }

    @Delete("/:id")
    remove(@Param('id') moiveId: string) {
        return this.moivesService.deleteOne(moiveId)
    }

    @Patch("/:id")
    patch(@Param('id') movieId: string, @Body() updateData) {
       return this.moivesService.update(movieId, updateData)
    }
}
