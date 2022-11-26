import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { Composable, PageComponent } from './components/page/page.js';
import { VideoComponent } from './components/page/item/video.js';
import { Component } from './components/component.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(appRoot);

    const image = new ImageComponent('Image Title', 'https://picsum.photos/600/300');
    this.page.addChild(image);

    const note = new NoteComponent('Note Title', 'Note Body');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo Title', 'Todo Item');
    this.page.addChild(todo);

    // https://www.youtube.com/watch?v=K3-jG52XwuQ
    // https://youtu.be/K3-jG52XwuQ
    const video = new VideoComponent('Video Title', 'https://youtu.be/K3-jG52XwuQ');
    this.page.addChild(video);
  }
}

new App(document.querySelector('.document')! as HTMLElement);
