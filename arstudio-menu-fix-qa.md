# AR Studio menu fix QA

The simplified navigation was tested in the local production preview.

The menu button opens a compact dropdown panel directly below the main header. It no longer renders the previous full-screen header with the extra hamburger icon, “Разгледайте сайта” label, or separate “Затвори” control. The dropdown presents four clearly separated groups: “Започнете оттук”, “Решения за бизнеса”, “Проекти и доверие”, and “За нас и контакт”.

The panel contains the expected routes and remains scrollable on short viewports through `max-h-[calc(100dvh-76px)] overflow-y-auto`. Selecting the “Уеб дизайн в Пловдив” item navigated to `/web-design-plovdiv` and closed the menu automatically. The menu trigger returned to its closed state on the new route.


The menu was reopened on `/web-design-plovdiv` and closed successfully with Escape. After closing, the normal header remained visible with the single `Меню` trigger and no extra overlay header. The active menu item correctly reflected the current page while the panel was open.
