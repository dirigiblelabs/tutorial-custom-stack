import { response } from "sdk/http";

const Code128 = Java.type("uk.org.okapibarcode.backend.Code128");
const BufferedImage = Java.type("java.awt.image.BufferedImage");
const Java2DRenderer = Java.type("uk.org.okapibarcode.output.Java2DRenderer");
const Color = Java.type("java.awt.Color");
const File = Java.type("java.io.File");
const ImageIO = Java.type("javax.imageio.ImageIO");
const FileUtils = Java.type("org.apache.commons.io.FileUtils");

const barcode = new Code128();
barcode.setFontName("Monospaced");
barcode.setFontSize(16);
barcode.setContent("custom-stack-1234");

const image = new BufferedImage(barcode.getWidth(), barcode.getHeight(), BufferedImage.TYPE_BYTE_GRAY);
const g2d = image.createGraphics();
const renderer = new Java2DRenderer(g2d, 1, Color.WHITE, Color.BLACK);
renderer.render(barcode);

const file = new File("code128.png");
ImageIO.write(image, "png", file);

const bytes = FileUtils.readFileToByteArray(file);

response.setContentType("image/png");
response.write(bytes);
response.flush();
response.close();