
<script lang="ts">
let visible: boolean = true;
import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@skeletonlabs/skeleton';
 
</script>


<button type="button" class="btn-icon variant-filled"><i class="fa-solid fa-skull" />
</button>

{#if visible}
    <aside class="alert variant-ghost">
        <!-- Icon -->
	<FontAwesomeIcon icon={faHome} />
	<FontAwesomeIcon icon={faUser} />

        <!-- Message -->
        <div class="alert-message">
            <h3 class="h3">A title</h3>
            <p>Got-Message</p>
        </div>
        <!-- Actions -->
        <div class="alert-actions">
	<button class="btn variant-filled">Action</button>
	<button class="btn-icon variant-filled">	<FontAwesomeIcon icon={faUser} />
	</button>
	</div>
    </aside>
{/if}
            
