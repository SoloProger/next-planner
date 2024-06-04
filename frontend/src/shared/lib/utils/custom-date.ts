export class CustomDate {
  static getLocaleDate(value = Date.now()): string {
    return new Date(value).toLocaleDateString("sv");
  }

  static toDay(): number {
    let today = CustomDate.getLocaleDate().split("-")[2];
    if (today.startsWith("0")) {
      today = today.split("0")[1];
    }
    return +today;
  }
}
