import {Auth} from '@/auth/Auth';
import type {IAnkhAuthRole} from 'ankh-types';

export function Tag({label}: IAnkhUiTag) {
  const $e = {
    tag: {
      e: function () {
        console.log("AnkhUi: 'Tag Edit' event triggered.");
      },
      x: function () {
        console.log("AnkhUi: 'Tag Delete' event triggered.");
      },
    },
  };

  return (
    <Auth.ReadRole>
      <div data-ui="tag">
        <span>{`#${label}`}</span>

        <Auth.WriteRole>
          <a href="#" onClick={$e.tag.e}>
            e
          </a>
        </Auth.WriteRole>

        <Auth.DeleteRole>
          <a href="#" onClick={$e.tag.x}>
            x
          </a>
        </Auth.DeleteRole>
      </div>
    </Auth.ReadRole>
  );
}

interface IAnkhUiTag extends IAnkhAuthRole {
  label: string;
}
