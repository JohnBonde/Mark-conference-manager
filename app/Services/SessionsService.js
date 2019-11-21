import Speaker from "../Models/Speaker.js";
import store from "../store.js";
import Session from "../Models/Session.js";

class SessionsService {
  addSession(newSession) {
    let session = new Session(newSession);
    store.State.sessions.push(session);
    store.saveState();
  }
  //NOTE this will add a speaker to a session
  addSpeaker(newSpeaker) {
    let speaker = new Speaker(newSpeaker);
    let session = store.State.sessions.find(s => s.id == speaker.sessionId);
    session.speakers.push(speaker);
    store.saveState();
  }

  removeSpeaker(sessionId, speakerId) {
    let sessionToRemoveSpeakerFrom = store.State.sessions.find(
      s => s.id == sessionId
    );
    let speakerIndex = sessionToRemoveSpeakerFrom.speakers.findIndex(
      s => s.id == speakerId
    );
    sessionToRemoveSpeakerFrom.speakers.splice(speakerIndex, 1);
    store.saveState();
  }
  removeSession(sessionId) {
    let sessionRemove = store.State.sessions.findIndex(s => s.id == sessionId);
    store.State.sessions.splice(sessionRemove, 1)
    store.saveState();
  }
}

const SESSIONSERVICE = new SessionsService();

export default SESSIONSERVICE;
