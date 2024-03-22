<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons';
import { faInternetExplorer } from '@fortawesome/free-brands-svg-icons';
import * as icons from '@fortawesome/free-solid-svg-icons';

console.log("Free solid svg icons");
console.log(icons);
	  export let iconid = 'faFlagUsa';
  console.log(  icons[iconid]);
</script>


<li class="">
          <FontAwesomeIcon icon={faCoffee} size="4x" />
        </li>

<li>

<h3> Whatever </h3>

<li class="">
          <FontAwesomeIcon icon={icons[iconid]} size="8x"  pulse fixedWidth rotation={90} flip="both" transform="left-1 rotate-15" inverse />
        </li>

<li>

<FontAwesomeIcon
            icon={faSpinner}
            pulse
            fixedWidth
            size="4x"
          />

</li>
<li class="">
          <FontAwesomeIcon
            icon={faFortAwesome}
            rotation={90}
            size="4x"
          />
        </li>

 <li class="">
          <FontAwesomeIcon
            icon={faInternetExplorer}
            flip="both"
            size="4x"
          />
        </li>

  <li class="">
          <FontAwesomeIcon
            icon={faFortAwesome}
            size="4x"
            transform="left-1 rotate-15"
          />
        </li>

 <li class="">
          <FontAwesomeIcon
            icon={faFortAwesome}
            inverse
            size="4x"
          />
        </li>