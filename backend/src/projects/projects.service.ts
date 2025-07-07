import { Injectable } from "@nestjs/common";
@Injectable()
export class ProjectsService {
  findAll() {
    return [
      {
        title: "Inria",
        description: "Recherche",
        technologies: ["TS", "Node"],
        date: "2022",
      },
    ];
  }
}
