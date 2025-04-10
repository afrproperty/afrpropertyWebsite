const itemsPerPage = 3;
		let currentPageLanded = 1;
		let currentPageHighrise = 1;
		
		function showPage(section, page) {
			const containerId = section === 'landed' ? 'landedItems' : 'highriseItems';
			const prevBtnId = section === 'landed' ? 'landedPrevBtn' : 'highrisePrevBtn';
			const nextBtnId = section === 'landed' ? 'landedNextBtn' : 'highriseNextBtn';
			const items = document.querySelectorAll(`#${containerId} .development-grid__col`);
			const totalPages = Math.ceil(items.length / itemsPerPage);
		
			items.forEach((item, index) =&gt; {
				item.style.display = (index &gt;= (page - 1) * itemsPerPage &amp;&amp; index &lt; page * itemsPerPage) ? 'block' : 'none';
			});
		
			document.getElementById(prevBtnId).disabled = page === 1;
			document.getElementById(nextBtnId).disabled = page === totalPages;
		
			if (section === 'landed') {
				currentPageLanded = page;
			} else {
				currentPageHighrise = page;
			}
		}
		
		function changePage(section, offset) {
			let currentPage = section === 'landed' ? currentPageLanded : currentPageHighrise;
			const containerId = section === 'landed' ? 'landedItems' : 'highriseItems';
			const totalItems = document.querySelectorAll(`#${containerId} .development-grid__col`).length;
			const totalPages = Math.ceil(totalItems / itemsPerPage);
		
			let newPage = currentPage + offset;
			if (newPage &lt; 1) newPage = 1;
			if (newPage &gt; totalPages) newPage = totalPages;
		
			showPage(section, newPage);
		}
		
		document.addEventListener('DOMContentLoaded', () =&gt; {
			showPage('landed', currentPageLanded);
			showPage('highrise', currentPageHighrise);
		});
