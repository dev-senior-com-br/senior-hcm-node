export abstract class BaseModel {
  toJsonString(): string {
    let json = JSON.stringify(this);
    Object.keys(this).filter(key => key[0] === '_').forEach(key => {
      json = json.replace(key, key.substring(1));
    });

    Object.values(this).forEach(
      value => {
        if((typeof value) === 'object') {
          Object.keys(value).filter(key => key[0] === '_').forEach(key => {
            json = json.replace(key, key.substring(1));
          });
        }
      }
    );

    return json;
  }
}