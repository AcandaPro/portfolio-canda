import { Controller, Get } from "@nestjs/common";
import { ProjectsService } from "./projects.service";
@Controller("projects")
export class ProjectsController {
  constructor(private readonly service: ProjectsService) {}
  @Get() findAll() {
    return this.service.findAll();
  }
}
