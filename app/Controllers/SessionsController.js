import SessionsService from "../Services/SessionsService.js";
import store from "../store.js";
//private parts
function _drawSessions() {
  let sessionsTemplate = "";
  let sessions = store.State.sessions;
  sessions.forEach(session => {
    sessionsTemplate += session.Template;
  });
  document.querySelector("#sessions").innerHTML = sessionsTemplate;
}
export default class SessionsController {
  constructor() {
    _drawSessions();
  }

  removeSpeaker(sessionId, speakerId) {
    SessionsService.removeSpeaker(sessionId, speakerId);
    _drawSessions();
  }
  removeSession(sessionId) {
    SessionsService.removeSession(sessionId);
    _drawSessions();
  }

  addSpeaker(event, sId) {
    event.preventDefault();
    let formData = event.target;
    let newSpeaker = {
      name: formData.name.value,
      topic: formData.topic.value,
      time: formData.time.value,
      sessionId: sId
    };
    SessionsService.addSpeaker(newSpeaker);
    formData.reset();
    _drawSessions();
  }
  addSession(event) {
    event.preventDefault();
    debugger;
    let formData = event.target;
    let newSession = {
      name: formData.name.value,
      speakers: []
    }
    SessionsService.addSession(newSession)
    formData.reset();
    _drawSessions();
  }
}
