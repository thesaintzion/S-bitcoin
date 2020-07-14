import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-emoji-dialog',
  templateUrl: './emoji-dialog.component.html',
  styleUrls: ['./emoji-dialog.component.scss']
})
export class EmojiDialogComponent implements OnInit {
  iconArray: string[];

  
  icons = `
  👏,😂,😍,😘,👍,🤷,😉,😢,🌹,🤳,😜,🤣,😒,💕,🙌,✌,😎,💖,
  🎉,🐱‍👤,😊,❤,👌,😁,🎶,🐱‍💻,😇,😋,🤗,🤓,😂,😐,😅,😊,😎,🤔,
  👩,👨,👵,👲,👸,🕵,👼,🙋,💆,🙍,🙆,💇,🙎,
  👶,👱,👮,👷,💂,🤶,🤵,💁,🤦,🙅,🎈,✨,🎉,🍕,🍔,
  🍟,🚓,🚕,🚙,❤,💛,💙,💚,💜,🖤,💔,❣,💕,💞,💓,💗,
  💖,💘,💝,💟,💌,💦,💨,💫
`;
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any, public _bottomSheetRef: MatBottomSheetRef<EmojiDialogComponent>) { 

  }


  openLink(emoji): void {
    this._bottomSheetRef.dismiss(emoji);
    // event.preventDefault();
  }

  ngOnInit() {
   
    this.iconArray = this.icons.split(',');
  }

}
