
import { Model } from '../models/Model'
// generic constraint implemented to inform TS of what methods will be available on type T
// interface ViewModel {
//   on(eventName: string, callback: () => void): void
// }


export abstract class View<T extends Model<K>, K> {

  regions: { [key: string]: Element } = {}


  constructor(public parent: Element, public model: T) {
    this.bindModel()
  }

  // abstract definition - informing this class what events map will look like to avoid errors
  abstract template(): string

  regionsMap(): { [key: string]: string } {
    return {}
  }

  // View.eventsMap is placeholder and is meant to be overridden by subclass
  eventsMap(): { [key: string]: () => void } {
    return {}
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    })
  }
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey])
      })
    }
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap()
    for (let key in regionsMap) {
      const selector = regionsMap[key]
      const element = fragment.querySelector(selector)
      if (element) {
        this.regions[key] = element;
      }
    }

  }

  // placeholder meant to be overridden
  onRender(): void {

  }

  render(): void {
    this.parent.innerHTML = "";
    // The HTML Content Template (<template>) element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template()
    this.bindEvents(templateElement.content)
    this.mapRegions(templateElement.content)

    // setup view nesting
    this.onRender();

    this.parent.append(templateElement.content)
  }
}