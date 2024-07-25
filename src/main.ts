import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhIfEx1RHxQdld5ZFRHallYTnNWUj0eQnxTdEFjXn1bcHxUR2JdUU1/Ww==');


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
