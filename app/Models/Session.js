import Speaker from "./Speaker.js";
import { generateId } from "../Utils.js";

export default class Session {
  constructor({ id = generateId(), name, speakers }) {
    this.id = id;
    this.name = name;
    this.speakers = speakers.map(s => new Speaker(s));
  }
  get Template() {
    return `
    <div class="col-5 mt-3 p-3 border rounded bg-info">
      <h1 class="text-center border-bottom">${this.name}</h1>
      <dl class="ml-5">
      ${this.getSpeakerTemplates()}
      </dl>
      <form onsubmit="app.sessionsController.addSpeaker(event, '${this.id}')">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter name" />
        </div>
        <div class="form-group">
          <label for="topic">Topic</label>
          <input
            type="text"
            class="form-control"
            id="topic"
            placeholder="Enter topic"
          />
        </div>
        <div class="form-group">
          <label for="time">Time</label>
          <input
            type="time"
            class="form-control"
            id="time"
            placeholder="Enter time"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="button" class="btn btn-danger" onclick="app.sessionsController.removeSession('${this.id}')">Delete</button>
      </form>
    </div>
    `;
  }
  get Template2() {
    return `
    <div class="col-5 mt-3 p-3 border rounded bg-info">
      <h1 class="text-center border-bottom">${this.name}</h1>
      <dl class="ml-5">
      </dl>
      <form onsubmit="app.sessionsController.addSpeaker(event, '${this.id}')">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" placeholder="Enter name" />
        </div>
        <div class="form-group">
          <label for="topic">Topic</label>
          <input
            type="text"
            class="form-control"
            id="topic"
            placeholder="Enter topic"
          />
        </div>
        <div class="form-group">
          <label for="time">Time</label>
          <input
            type="time"
            class="form-control"
            id="time"
            placeholder="Enter time"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="button" class="btn btn-danger" onclick="app.sessionsController.removeSession('${this.id}')">Delete</button>
      </form>
    </div>
    `;
  }
  //NOTE this method will inject the subobject (speaker) template into the parent template
  getSpeakerTemplates() {
    let template = ""; //build string for all the sub document html
    this.speakers.forEach(speaker => {
      template += speaker.Template;
    });
    return template;
  }
  get sessionTemplate() {
    let template = '';
    this.name.forEach(name => {
      template += name.Template2;
    });
    return template
  }
}
