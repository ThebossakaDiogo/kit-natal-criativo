import asyncio
from playwright.async_api import async_playwright
async def main():
  async with async_playwright() as p:
    b=await p.chromium.launch(headless=True); pg=await b.new_page(viewport={"width":420,"height":900})
    errs=[]; pg.on("pageerror",lambda e:errs.append(str(e)))
    await pg.goto("http://localhost:8080/",wait_until="networkidle")
    await pg.screenshot(path="m1.png")
    await pg.get_by_text("Quero o kit básico").click(); await pg.wait_for_timeout(600)
    await pg.screenshot(path="m2.png"); print(errs)
    await b.close()
asyncio.run(main())
